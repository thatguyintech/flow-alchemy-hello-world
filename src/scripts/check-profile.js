import * as fcl from "@onflow/fcl"
import * as t from "@onflow/types"

export const checkProfile = async() => {
  console.log("checking")
  await fcl
    .send([
      fcl.script`
        import Profile from 0xba1132bc08f82fe2

        pub fun main(address: Address): Profile.ReadOnly? {
          return Profile.read(address)
        }
      `,
      fcl.args([
        fcl.arg("0xba1132bc08f82fe2", t.Address), // <-- t.Address this time :)
      ]),
    ])
    .then(fcl.decode)
    .then(d => console.log("hello", d.info));
}