"use client";

import { useState, useEffect } from "react";
import { FontStyle, FontWeight, Text, TextColors } from "../Text/Text";
import { ElementJSONType } from "@/utils/dynamicText";
import { Input } from "../Input/Input";

const TextEditor = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  const [step, setStep] = useState<"editText" | "editStyle">("editText");
  return (
    <div>
      {step === "editText" ? (
        <div>
          <Input
            value={value}
            onChange={(e) => onChange((e.target as HTMLInputElement).value)}
          />
        </div>
      ) : (
        <div>
          {/* {jsonValue.map(({ children, element }) => {
            if (element === "span") {
              return <Text key={children}>{children}</Text>;
            }
          })} */}
        </div>
      )}
    </div>
  );
};

export default TextEditor;
