import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, addDoc, query, where, collection, getDocs, Timestamp  } from "firebase/firestore/lite";


const firebaseConfig = {
    apiKey: "AIzaSyBiLVhrwwfR3Mb3G1yp8gp6AW5C6ysUF-k",
    authDomain: "appreact-1162c.firebaseapp.com",
    projectId: "appreact-1162c",
    storageBucket: "appreact-1162c.appspot.com",
    messagingSenderId: "765895772861",
    appId: "1:765895772861:web:337e4236314bf80e97c5d4"

};


const app = initializeApp(firebaseConfig);
const fireStoreDb = getFirestore(app);

export default fireStoreDb;

export async function getAllItems() {
    const miColec = collection(fireStoreDb,'items');
    const itemsSnapshot = await getDocs(miColec);

    return itemsSnapshot.docs.map(doc => {
        return {
        ...doc.data(),
        id: doc.id
        }
})};

export async function getItemsByCategory(categoryid){
    const miColec = collection(fireStoreDb,'items');
    const queryItem = query(miColec, where("category", '==', categoryid));
    const itemSnapshot = await getDocs(queryItem);

    return itemSnapshot.docs.map(doc => {
        return {
        ...doc.data(),
        id: doc.id
        }
    
})};

export async function getItem(id){
    const miColec = collection(fireStoreDb,'items');
    const itemRef = doc(miColec, id);
    const itemSnapshot = await getDoc(itemRef);

    
        return {
        ...itemSnapshot.data(),
        id: itemSnapshot.id
        }
    
};

export async function createBuyOrder(orderData){
    const buyTimeStamp = Timestamp.now();
    const orderWithDate = {
        ...orderData,
        date: buyTimeStamp
    };
    const miColec = collection(fireStoreDb,'buyOrders');
    const orderDoc = await addDoc(miColec, orderWithDate);
    console.log("Orden lista con el id ",orderDoc.id);
    return orderDoc.id;   
}