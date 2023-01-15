
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}

export class CreateProductInput {
    name: string;
    category: string;
    quantity?: Nullable<number>;
    status?: Nullable<Status>;
}

export class UpdateProductInput {
    id: string;
    name?: Nullable<string>;
    category?: Nullable<string>;
    quantity?: Nullable<number>;
    status?: Nullable<Status>;
}

export class Product {
    _id: string;
    name: string;
    category: string;
    quantity?: Nullable<number>;
    status?: Nullable<Status>;
    created_at: string;
    updated_at?: Nullable<string>;
    deleted_at?: Nullable<string>;
}

export abstract class IQuery {
    abstract products(): Nullable<Product>[] | Promise<Nullable<Product>[]>;

    abstract product(id: string): Nullable<Product> | Promise<Nullable<Product>>;
}

export abstract class IMutation {
    abstract createProduct(createProductInput: CreateProductInput): Product | Promise<Product>;

    abstract updateProduct(updateProductInput: UpdateProductInput): Product | Promise<Product>;

    abstract removeProduct(id: string): Nullable<Product> | Promise<Nullable<Product>>;
}

type Nullable<T> = T | null;
