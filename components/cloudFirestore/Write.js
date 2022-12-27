import firebase from 'firebase/app'
import 'firebase/firestore'

const WriteToCloudFirestore = () => {
  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection('myCollection')
        .doc('my_document')
        .set({
          id: 'name',
        })
        .then(alert('Data successfully written!'))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <button onClick={sendData}>Send data</button>
    </>
  )
}

export default WriteToCloudFirestore
