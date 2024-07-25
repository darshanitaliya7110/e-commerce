"use client";

import { setProductData } from "@/actions/productAction";
import { data } from "@/data";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "./ProductList";
import { db } from "@/app/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const Product = () => {
    const dispatch = useDispatch();
    const { productData } = useSelector((state) => state.products);

    const addProductDataFirestore = useCallback(async (data) => {
        try {
            await setDoc(doc(db, 'products', "allProduct"), data)
        } catch (error) {
            console.log('Error adding user', error)
        }
    }, [])

    const getProductDataFirestore = useCallback(async () => {
        try {
            const docRef = doc(db, 'products', "allProduct");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const document = { id: docSnap.id, ...docSnap.data() };
                dispatch(setProductData(document));
            } else {
                console.log('No such document!');
            }
        } catch (error) {
            console.error('Error getting document: ', error);
            throw error;
        }

    }, [dispatch])

    useEffect(() => {
        addProductDataFirestore(data)
        getProductDataFirestore()
    }, [dispatch, addProductDataFirestore, getProductDataFirestore]);

    return (
        <div>
            {/* <Navbar />
            <Sidebar categories={productData.categories} /> */}
            <ProductList products={productData.products} />
        </div>
    );
};

export default Product;
