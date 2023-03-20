import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import Loading from "../components/Loading";
import "../App.css";

const ItemListContainer = ({ greeting }) => {
  const { categoryid } = useParams();
  const [loading, setLoading] = useState(true);
  const [prodList, setProdList] = useState([]);

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();
    const itemsCollection = categoryid
      ? query(collection(db, "products"), where("category", "==", categoryid))
      : collection(db, "products");
    getDocs(itemsCollection)
      .then((snapshot) => {
        setProdList(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoryid]);

  return (
    <>
      <h1>{greeting}</h1>
      {loading ? <Loading /> : <ItemList products={prodList} />}
    </>
  );
};

export default ItemListContainer;
