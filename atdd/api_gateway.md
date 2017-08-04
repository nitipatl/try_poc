# List of product

## POST /graphql
ทำการทดสอบสำหรับดึงข้อมูลสินค้าทั้งหมด โดยแสดงรายละเอียดทั้งหมดของสินค้านั้น

* Content-Type: "application/json"

```json
{"query":"{getProductList {productName shortDescription longDescription sku}}",
"variables":null,
"operationName":null}
```
===

### ผลการทำงานที่คาดหวัง
แสดงรายละเอียดของสินค้าทั้งหมด

* Status: 200
* Content-Type: "application/json"

```json
{
    "data": {
        "getProductList": [
            {
                "productName": "Product name 01",
                "shortDescription": "Short 01",
                "longDescription": "Long 01",
                "sku": 1
            },
            {
                "productName": "Product name 02",
                "shortDescription": "Short 02",
                "longDescription": "Long 02",
                "sku": 2
            }
        ]
    }
}
```

## POST /graphql
ทำการทดสอบสำหรับดึงข้อมูลสินค้าทั้งหมด โดยแสดงเฉพาะชื่อสินค้าเท่านั้น

* Content-Type: "application/json"

```json
{"query":"{getProductList {productName}}",
"variables":null,
"operationName":null}
```
===

### ผลการทำงานที่คาดหวัง
แสดงรายละเอียดของสินค้าทั้งหมด

* Status: 200
* Content-Type: "application/json"

```json
{
    "data": {
        "getProductList": [
            {
                "productName": "Product name 01"
            },
            {
                "productName": "Product name 02"
            }
        ]
    }
}
```

## POST /graphql
ทำการทดสอบสำหรับดึงข้อมูลด้วย id=1 เท่านั้น

* Content-Type: "application/json"

```json
{"query":"{getProductList(id:1) {productName}}",
"variables":null,
"operationName":null}
```
===

### ผลการทำงานที่คาดหวัง
แสดงรายละเอียดของสินค้าทั้งหมด

* Status: 200
* Content-Type: "application/json"

```json
{
    "data": {
        "getProductList": [
            {
                "productName": "Product name 02"
            }
        ]
    }
}
```
