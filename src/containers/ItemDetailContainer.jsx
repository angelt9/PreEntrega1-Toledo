import React, { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "../components/Loading";

const ItemDetailContainer = () => {
  const [detailProd, setDetailProd] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = doc(db, "products", id);
    getDoc(itemsCollection)
      .then((snapshot) => {
        setDetailProd({ id: snapshot.id, ...snapshot.data() });
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>{loading ? <Loading /> : <ItemDetail detailProd={detailProd} />}</div>
  );
};

export default ItemDetailContainer;
