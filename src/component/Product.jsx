"use client";

import { setProductData } from "@/actions/productAction";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "./ProductList";
import { db } from "@/app/firebase";
import { collection, getDocs } from "firebase/firestore";

const Product = () => {
    const dispatch = useDispatch();
    const { productData } = useSelector((state) => state.products);


    const getProductDataFirestore = useCallback(async () => {

        try {
            const querySnapshot = await getDocs(collection(db, 'products'))
            const documents = []
            querySnapshot.forEach((doc) => {
                documents.push({ id: doc.id, ...doc.data() })
            })
            dispatch(setProductData(documents))
        } catch (error) {
            console.error('Error getting documents: ', error)
            throw error
        }

    }, [dispatch])

    useEffect(() => {
        getProductDataFirestore()
    }, [dispatch, getProductDataFirestore]);

    return (
        <div>
            <ProductList products={productData} />
        </div>
    );
};

export default Product;
