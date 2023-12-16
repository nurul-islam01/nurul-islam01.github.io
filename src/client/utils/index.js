import { differenceInHours, formatDistanceToNow } from "date-fns";
import { bn } from "date-fns/locale";
import { format } from "date-fns-tz";
import { category as categories } from "configs/config";

export function validURL(str = "") {
  // prettier-ignore
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    str
  );
}

const engToBnNumber = (char) => {
  const numbersObj = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
    ".": ".",
    "-": "-",
  };
  return numbersObj[char];
};

export function toBanglaString(value) {
  return String(value)
    .toString()
    .split("")
    .map((num) => engToBnNumber(num) || num)
    .join("");
}

export const toBanglaNum = (value) => {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(parseFloat(value)) || isNaN(value - 0)) {
    return "Invalid input type";
  }

  let str = "";

  return (
    value
      .toString()
      .split("")
      // eslint-disable-next-line no-return-assign
      .forEach((num) => (str += engToBnNumber(num))),
    str
  );
};

export const toBanglaMonth = (value) => {
  const monthsObj = {
    1: "জানুয়ারি",
    2: "ফেব্রুয়ারি",
    3: "মার্চ",
    4: "এপ্রিল",
    5: "মে",
    6: "জুন",
    7: "জুলাই",
    8: "আগস্ট",
    9: "সেপ্টেম্বর",
    10: "অক্টোবর",
    11: "নভেম্বর",
    12: "ডিসেম্বর",
  };

  return monthsObj[value];
};

export const getBanglaWeekName = (name) => {
  const weekObj = {
    Sunday: "রোববার",
    Monday: "সোমবার",
    Tuesday: "মঙ্গলবার",
    Wednesday: "বুধবার",
    Thursday: "বৃহস্পতিবার",
    Friday: "শুক্রবার",
    Saturday: "শনিবার",
  };
  return weekObj[name];
};

export const getBanglaWeekNameShort = (name) => {
  const weekObj = {
    Sun: "রোববার",
    Mon: "সোমবার",
    Tue: "মঙ্গলবার",
    Wed: "বুধবার",
    Thu: "বৃহস্পতিবার",
    Fri: "শুক্রবার",
    Sat: "শনিবার",
  };
  return weekObj[name];
};

export const getEnglishWeekName = (name) => {
  const weekObj = {
    Sun: "Sunday",
    Mon: "Monday",
    Tue: "Tuesday",
    Wed: "Wednesday",
    Thu: "Thursday",
    Fri: "Friday",
    Sat: "Saturday",
  };
  return weekObj[name];
};

export const toEngMonth = (value) => {
  const monthsObj = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  return monthsObj[value];
};

export const checkImageURL = (url) => {
  if (typeof url !== "string") {
    return false;
  }
  /* eslint-disable no-useless-escape */
  return url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp|webp)(\?(.*))?$/gim) !== null;
};

function dateIsValid(date) {
  return !Number.isNaN(new Date(date).getTime());
}

export const getStoryDate = (publishedTime, storyPage) => {
  if (!dateIsValid(publishedTime)) return "";
  const hourDifference = differenceInHours(new Date(), new Date(publishedTime));

  if (hourDifference < 23 && !storyPage) {
    return formatDistanceToNow(new Date(publishedTime), { addSuffix: true, locale: bn })
      .replace(/প্রায়|about/gi, "")
      .replace(/less than a/gi, 1)
      .replace(/ঘন্টা/g, "ঘণ্টা")
      .trim();
  }
  let pattern = `dd MMMM yyy`;

  if (storyPage) {
    pattern = "dd MMMM yyy, HH:mm";
  }

  return format(publishedTime, pattern, { addSuffix: true, locale: bn })
    .split("")
    .map((char) => engToBnNumber(char) || char)
    .join("")
    .replace(":", ": ");
};

export const today = () =>
  format(new Date(), "dd MMMM, iiii yyy", { locale: bn })
    .split("")
    .map((char) => engToBnNumber(char) || char)
    .join("");

export const getStoryUrl = (story) => {
  if (!story) return null;
  const { story_type: storyType } = story;

  if (story.video_thumbnail || (storyType && storyType === "Video Story")) {
    return `/video/${story.news_slug}`;
  }
  if (story.photo_thumbnail) {
    return `/photo/${story.photostory_slug}`;
  }
  if (story?.categories?.[0]) {
    const category = story?.categories?.[0] || {};
    return `/${category.slug || story.category_slug}/${story.news_slug}`;
  }
  return `/${story.category_slug}/${story.news_slug}`;
};

/* eslint-disable */
export const getSectionDetails = (sectionSlug) => {
  const category = categories.find(({ slug }) => slug.includes(sectionSlug));
  let children;

  if (category.parent_id) {
    children = categories.filter(({ parent_id }) => category.parent_id === parent_id);
  } else {
    children = categories.filter(({ parent_id }) => category.id === parent_id);
  }

  return {
    children,
    ...category,
  };
};
/* eslint-enable */

export const getPhotoUrl = (story) => {
  if (story.video_thumbnail) {
    return (
      story?.video_thumbnail?.url ||
      "https://cdn.rajneete.com/images/avatar_d7sQTjL.2e16d0ba.fill-300x300.format-webp.webp"
    );
  }
  if (story.photo_thumbnail) {
    return (
      story?.photo_thumbnail?.meta?.download_url ||
      "https://cdn.rajneete.com/images/avatar_d7sQTjL.2e16d0ba.fill-300x300.format-webp.webp"
    );
  }
  if (!story.blog_image) {
    // eslint-disable-next-line camelcase
    const { img_url } = story;
    // eslint-disable-next-line camelcase
    return img_url || "https://cdn.rajneete.com/images/avatar_d7sQTjL.2e16d0ba.fill-300x300.format-webp.webp";
    // eslint-disable-next-line camelcase
  }
  const { blog_image: { download_url: src } = {} } = story;

  return src || "https://cdn.rajneete.com/images/avatar_d7sQTjL.2e16d0ba.fill-300x300.format-webp.webp";
};
