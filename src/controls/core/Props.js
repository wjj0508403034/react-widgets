class Props {

  get types() {
    if (!this.__types) {
      this.__types = {};
    }

    return this.__types;
  }

  get defaultValues() {
    if (!this.__defaultValues) {
      this.__defaultValues = {};
    }

    return this.__defaultValues;
  }

  add(name, type, defaultValue) {
    this.types[name] = type;
    this.defaultValues[name] = defaultValue;
    return this;
  }

  defaultValue(name, defaultValue) {
    if(!this.hasProp(name)){
      throw new Error(`Property ${name} not defined.`)
    }
    this.defaultValues[name] = defaultValue;
    return this;
  }

  hasProp(name){
    return !!this.types[name];
  }
}

export default Props;