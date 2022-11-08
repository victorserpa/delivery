const { GoogleSpreadSheet, GoogleSpreadsheet } = require("google-spreadsheet")
const credentials = require("./credentials.json")

const doc = new GoogleSpreadsheet(
  "1476BWqt93t0dc4XOv15pmwr1dRay-yPNVXQ9Buo7mwM"
)

const run = async () => {
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    //CEP	Rua	Numero	Complemento	Bairro	Cidade	UF	Pagamento
    await sheet.addRow({
      CEP: "88226-310",
      Rua: "Rua teste 123",
      Numero: '123',
      Complemento: "Casa 1",
      Bairro: "Saguaçu",
      Cidade: "Joinville",
      UF: "SC",
      Pagamento: "Crédito", 
    })
    
  } catch (err) {
    console.log(err)
  }
}
run()
