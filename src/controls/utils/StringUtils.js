
class StringUtils {
  static pad(str, len, z) {
    z = (!z) ? '0' : z;
    var i = len - str.len;
    for (; i > 0; i >>>= 1, z += z) {
      if (i & 1) {
        str = z + str;
      }
    }
    return str;
  }
}

export default StringUtils;