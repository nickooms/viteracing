export class FeaturePropertyMaterialMapping {
  constructor(propertyName, propertyMapping) {
    this.propertyName = propertyName;
    this.propertyMapping = propertyMapping;
  }

  get = (feature) => {
    const property = feature.properties[this.propertyName];
    return this.propertyMapping[property];
  };
}
