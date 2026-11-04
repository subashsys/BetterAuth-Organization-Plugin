export function validateNoteContent(content: unknown): content is string {
  return typeof content === "string" && content.trim().length > 0 && content.length <= 500;
}
