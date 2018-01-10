
class Utils {

  combine(prefixClass, className, classes) {
    if (!classes) {
      return className;
    }

    let array = [className];
    Object.keys(classes).forEach(function (key, index) {
      let value = classes[key];
      if (value !== null && value !== undefined) {
        array.push(`${prefixClass}${key}`);
      }
    });


    return array.join(" ");
  }
}

let ClassUtils = new Utils();

export default ClassUtils;