import {
  IconButton,
  InputAdornment,
  makeStyles,
  OutlinedInput,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import React, { useCallback, useState } from "react";

const useStyles = makeStyles(() => ({
  form: {
    width: "100%",
  },
  input: {
    width: "100%",
  },
}));

interface ChatInputProps {
  onSubmit: (val: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSubmit }) => {
  const { form, input } = useStyles();
  const [value, setValue] = useState("");
  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return (
    <form
      className={form}
      onSubmit={(e) => {
        e.preventDefault();
        setValue("");
        if (value) {
          onSubmit(value);
        }
      }}
    >
      <OutlinedInput
        className={input}
        type={"text"}
        value={value}
        placeholder="Type your message here"
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" type="submit">
              <SendIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </form>
  );
};
