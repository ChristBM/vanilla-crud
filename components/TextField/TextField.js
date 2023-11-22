export default function TextField({
  id,
  type,
  label,
  placeholder,
  subtitle = ''
}) {
  const forLabelId = id || crypto.randomUUID()

  return `
    <label for="${forLabelId}" class="text_field__label">
      <span class="text_field__label_txt">
        ${label}
      </span>

      ${subtitle}

      <input
        type="${type}"
        id="${forLabelId}"
        name="${forLabelId}"
        placeholder="${placeholder}"
        class="text_field__input"
      >
    </label>
  `
}
