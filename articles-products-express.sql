\c danikaharada;

DROP DATABASE IF EXISTS "articles_products_express";
CREATE DATABASE "articles_products_express";


\c "articles_products_express";

--creating products table
DROP TABLE IF EXISTS "products";
CREATE TABLE "products" (
  id serial NOT NULL PRIMARY KEY,
  name varchar(90) NOT NULL,
  price INTEGER NOT NULL,
  inventory INTEGER NOT NULL,
  created_at timestamp WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at timestamp WITH TIME ZONE DEFAULT now() NOT NULL);

--creating articles table
DROP TABLE IF EXISTS "articles";
CREATE TABLE "articles" (
title varchar(200) NOT NULL,
author varchar(200) NOT NULL,
body varchar(500) NOT NULL,
created_at timestamp WITH TIME ZONE DEFAULT now() NOT NULL,
updated_at timestamp WITH TIME ZONE DEFAULT now() NOT NULL);


