import { Category } from "./category";
import { ResponseModel } from "./responseModel";

export interface CateegoryResponseModel extends ResponseModel{
    data:Category[]
}