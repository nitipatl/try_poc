# Category graph testing

## POST /graphql

### แสดงข้อมูลหมวดหมู่ทั้งหมด
แสดงข้อมูลทั้งหมดของหมวดหมู่ แสดง `name` กับ `image`

* Content-Type: "application/json"

```
{"query":"{getCategoryList {name image}}","variables":null,"operationName":null}
```

===

สิ่งที่แสดงออกมาคือหมวดหมู่ทั้งหมด

* Status: 200
* Content-Type: "application/json"

```json
{
    "data": {
        "getCategoryList": [
            {
                "name": "Product name 01",
                "image": "Short 01"
            },
            {
                "name": "Product name 02",
                "image": "Short 02"
            }
        ]
    }
}
```
---
## POST /graphql

### แสดงข้อมูลหมวดหมู่ตามที่ระบุ
แสดงข้อมูลเฉพาะหมวดหมู่เฉพาะ `id` ที่ส่งมา

* Content-Type: "application/json"

```
{"query":"{getCategoryList(id: 1) {name image}}","variables":null,"operationName":null}
```

===

สิ่งที่แสดงออกมาคือหมวดหมู่ทั้งหมด

* Status: 200
* Content-Type: "application/json"

```json
{
    "data": {
        "getCategoryList": [
            {
                "name": "Product name 01",
                "image": "Short 01"
            }
        ]
    }
}
```