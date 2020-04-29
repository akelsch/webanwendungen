export default class PopupData {
  constructor (attributes) {
    this.county = attributes.county
    this.bl = attributes.BL
    this.ewz = attributes.EWZ
    this.cases = attributes.cases
    this.cases_per_100k = attributes.cases_per_100k
    this.cases7_per_100k = attributes.cases7_per_100k
    this.deaths = attributes.deaths
  }
}
