import { StoreModel } from "./StoreModel"

export class productModel{
    id:number
    name:string
    sku:string
    price:number
    qty:number
    desc:string

    size_id:number

    color_id:number

    brand_id:number

    category_id:number

    store_id:number

    avi:boolean

    store:StoreModel

    imgPath:string
}