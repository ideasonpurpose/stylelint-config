// @ts-check

import { animation } from "./groups/animation.js";
import { boxModel } from "./groups/box-model.js";
import { content } from "./groups/content.js";
import { misc } from "./groups/miscellaneous.js";
import { positioning } from "./groups/positioning.js";
import { special } from "./groups/special.js";
import { transition } from "./groups/transition.js";
import { typography } from "./groups/typography.js";
import { visual } from "./groups/visual.js";



export default {
  plugins: ["stylelint-order", "stylelint-prettier"],
  customSyntax: "postcss-scss",
  // extends: ["stylelint-config-idiomatic-order"],
  rules: {
    "prettier/prettier": [true, { printWidth: 150 }],
    "order/properties-order": [
      [
        special,
        content,
        positioning,
        boxModel,
        typography,
        visual,
        transition,
        animation,
        misc,
      ],
      {
        emptyLineBeforeUnspecified: "threshold",
        emptyLineMinimumPropertyThreshold: 7,
      },
    ],
    "rule-empty-line-before": [
      "always-multi-line",
      { except: ["first-nested"], ignore: ["after-comment"] },
    ],
  },
  ignoreFiles: ["**/node_modules/**/*", "**/dist/**/*", "**/*.js"],
};
