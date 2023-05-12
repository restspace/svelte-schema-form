import { describe, expect, test } from "vitest";
import { validator } from "@exodus/schemasafe";

describe("schemasafe behaviour", () => {
  test("ignores special properties", () => {
    const schema = {
      type: "object",
      properties: {
        salutation: { type: "string", enum: ["Mr", "Mrs", "Ms", "Dr"] },
        firstName: { type: "string", maxLength: 10 },
        lastName: { type: "string", readOnly: true },
        canContact: {
          type: "string",
          enum: ["yes", "no"],
          editor: "radioButtons",
          description: "Whether can contact",
        },
        preferredContact: {
          type: "array",
          items: { type: "string", enum: ["phone", "email", "text"] },
          editor: "multiCheck",
        },
        dateOfBirth: { type: "string", format: "date" },
        password: { type: "string", format: "password" },
        comments: { type: "string", editor: "textarea" },
        files: { type: "string", editor: "upload" },
        things: {
          type: "array",
          items: {
            type: "object",
            properties: {
              first: { type: "string" },
              second: { type: "string" },
            },
          },
        },
        address: {
          type: "object",
          properties: {
            addressLine: { type: "string" },
            postcode: { type: "string" },
          },
          required: ["postcode"],
        },
      },
      propertyOrder: [
        "salutation",
        ["firstName", "lastName"],
        "canContact",
        "preferredContact",
        "dateOfBirth",
        "password",
        "comments",
        "files",
        "things",
        "address",
      ],
      if: {
        type: "object",
        properties: { salutation: { type: "string", const: "Dr" } },
      },
      then: {
        type: "object",
        properties: { isMedical: { type: "boolean" } },
        propertyOrder: ["canContact", "isMedical"],
      },
    };
    const refSchema = {
      $id: "http://schema.org/myschema",
      type: "object",
      properties: {
        def: { type: "string" },
      },
      propertyOrder: ["def"],
    };
    const validate = validator(schema, {
      includeErrors: true,
      allErrors: true,
      allowUnusedKeywords: true,
      schemas: [refSchema],
      formats: {
        password: (v) => true,
      },
    });
    const res = validate({
      abc: "xxx",
    });
    console.log("valid: " + JSON.stringify(res));
  });
});
