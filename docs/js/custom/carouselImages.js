import { tns } from "../../../node_modules/tiny-slider/dist/tiny-slider"

var slider = tns({
  container: '.myslider',
  items: 1,
  responsive: {
    640: {
      edgePadding: 20,
      gutter: 20,
      items: 2,
    },
    700: {
      gutter: 25,
    },
    900: {
      items: 3,
    },
  }
});