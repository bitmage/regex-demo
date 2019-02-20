// require some dependencies
const Papa = require('papaparse')
const { Client } = require('pg')
const {join} = require('path')

// this is where you should put your database credentials
// https://node-postgres.com/features/connecting#programmatic
const client = new Client({
})

// this lets you choose a path relative to the current directory...
// change to the name of your csv file
const csv_path = join(__dirname, 'some-file.csv')

// create an "async" main function
// this lets us call "await" which waits for network/disk operations
const main = async () => {

  // connect to your database
  await client.connect()

  // parse the CSV and run your step function
  Papa.parse(csv_path, {
    worker: true,
    step: async function(results) {
      // start with this so you can verify that you're reading from the CSV
      console.log("Row:", results.data);

      // when you're ready, write your insert query in below and uncomment these lines
      // const result = await client.query('SELECT $1::text as message', ['Hello world!'])
      // console.log(result) // do you care about the result?  it might tell you if something went wrong
    }
  })

  // I think this will wait until all queries have run before disconnecting...
  // You might have to remove this line if the operation seems to get cut off
  await client.end()
}

// run our main function
main()
