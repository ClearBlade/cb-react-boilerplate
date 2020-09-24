import { Box, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChatFeed, Message } from "react-chat-ui";
import PageContainer from "../../components/PageContainer";
import { ChatInput } from "./ChatInput";

const CHAT_TOPIC = "chat";

interface ChatMessagePayload {
  email: string;
  message: string;
}

function getMessageId(currentUserEmail: string, messageEmail: string) {
  if (currentUserEmail === messageEmail) {
    return 0;
  }
  return 1;
}

function isChatMessagePayload(payload: unknown): payload is ChatMessagePayload {
  if (
    payload &&
    typeof payload === "object" &&
    "email" in payload &&
    "message" in payload
  ) {
    return true;
  }
  return false;
}

export const ChatPage: React.FC = () => {
  const [messagingError, setMessagingError] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const msgRef = useRef<Messaging>();
  useEffect(() => {
    msgRef.current = window.CB_PORTAL.ClearBlade.Messaging(
      {
        useSSL: window.location.protocol === "https:" ? true : false,
        maxConnectRetries: 2,
      },
      (err, body) => {
        if (err) {
          setMessagingError("Uh oh! Failed to connect to Messaging");
        } else {
          msgRef.current?.subscribe(CHAT_TOPIC, {}, (payload, message) => {
            try {
              const parsedMessage = JSON.parse(payload);
              if (isChatMessagePayload(parsedMessage)) {
                setMessages((prev) => [
                  ...prev,
                  new Message({
                    id: getMessageId(
                      window.CB_PORTAL.ClearBlade.user.email,
                      parsedMessage.email
                    ),
                    message: parsedMessage.message,
                    senderName: parsedMessage.email,
                  }),
                ]);
              }
            } catch (e) {
              console.error("Failed to add new message", e);
            }
          });
        }
      }
    );
    return () => {
      try {
        if (msgRef.current?.client.isConnected()) {
          msgRef.current?.unsubscribe("chat", {});
          msgRef.current?.client.disconnect();
        }
      } catch (e) {
        console.error("Failed to unsubscribe", e);
      }
    };
  }, []);

  const handleNewUserMessage = useCallback((newMessage) => {
    if (msgRef.current) {
      const payload: ChatMessagePayload = {
        email: window.CB_PORTAL.ClearBlade.user.email,
        message: newMessage,
      };
      // @ts-ignore
      msgRef.current.publish(CHAT_TOPIC, JSON.stringify(payload));
    }
  }, []);
  return (
    <PageContainer>
      {messagingError ? (
        <Alert severity="error">{messagingError}</Alert>
      ) : (
        <>
          {messages.length > 0 ? (
            <ChatFeed messages={messages} showSenderName />
          ) : (
            <Box height="100%" textAlign="center">
              <Typography>
                Use the text input below to send a message.
              </Typography>
              <Typography>Your friends can join the chat too!</Typography>
            </Box>
          )}
          <ChatInput onSubmit={handleNewUserMessage} />
        </>
      )}
    </PageContainer>
  );
};
