"use client";

import { setProductData } from "@/actions/productAction";
import { data } from "@/data";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import Link from "next/link";
import ProductList from "./ProductList";
import Sidebar from "./Sidebar";

const Product = () => {
    const dispatch = useDispatch();
    const { productData } = useSelector((state) => state.products);
    console.log("productData", productData);
    useEffect(() => {
        dispatch(setProductData(data));
    }, [dispatch]);

    return (
        <div>
            <Navbar />
            <Sidebar categories={productData.categories} />
            <ProductList products={productData.products} />
        </div>
    );
};

export default Product;
