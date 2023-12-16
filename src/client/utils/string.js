export const makeId = (index = 0, length = 8) =>
  parseInt(
    Math.ceil(Math.random() * Date.now())
      .toPrecision(length)
      .toString()
      .replace(".", ""),
    10,
  ) + index;

export const defaultImage = "https://cdn.rajneete.com/images/avatar_d7sQTjL.2e16d0ba.fill-300x300.format-webp.webp";
