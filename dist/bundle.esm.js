import { useEffect, useState, useRef } from "react";
import ResizeObserver from "resize-observer-polyfill";

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
  );
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function index() {
  var ref = useRef();

  var _useState = useState(1),
    _useState2 = _slicedToArray(_useState, 2),
    width = _useState2[0],
    changeWidth = _useState2[1];

  var _useState3 = useState(1),
    _useState4 = _slicedToArray(_useState3, 2),
    height = _useState4[0],
    changeHeight = _useState4[1];

  useEffect(function() {
    var element = ref.current;
    var resizeObserver = new ResizeObserver(function(entries) {
      if (!Array.isArray(entries)) {
        return;
      } // Since we only observe the one element, we don't need to loop over the
      // array

      if (!entries.length) {
        return;
      }

      var entry = entries[0];
      changeWidth(entry.contentRect.width);
      changeHeight(entry.contentRect.height);
    });
    resizeObserver.observe(element);
    return function() {
      return resizeObserver.unobserve(element);
    };
  }, []);
  return [ref, width, height];
}

export default index;
