const { GoogleSpreadSheet, GoogleSpreadsheet } = require("google-spreadsheet")
const credentials = require("./credentials.json")

const doc = new GoogleSpreadsheet(
  "1476BWqt93t0dc4XOv15pmwr1dRay-yPNVXQ9Buo7mwM"
)

const run = async () => {
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    console.log(doc.title)
  } catch (err) {
    console.log(err)
  }
}
run()
