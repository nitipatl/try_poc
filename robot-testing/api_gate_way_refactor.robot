*** Settings ***
Library   RequestsLibrary
Library   Collections

*** Testcases ***
Category
    Insert new category

*** Keywords ***
Send graphQL query to service
    [Arguments]     ${query}
    Create Session   api-gateway    http://localhost:9000
    &{headers}=   Create Dictionary   Content-Type=application/json
    &{data}=   Create Dictionary   query=${query}
    ${response}=   Post Request    api-gateway   /graphql   data=${data}  headers=${headers}
    Set Test Variable    ${response}

Insert new category
    ${query}=   catenate
    ...  mutation insertCat {
    ...     insertCategory(input: {name: "ทดสอบ", image: "ok.jpg", label: {en: "ok", cn: "OK", th: "OK2"}}) {
    ...         name
    ...         image
    ...         label {
    ...             en
    ...             th,
    ...             cn
    ...         }
    ...     }
    ...  }
    Send graphQL query to service   ${query}
    Should Be Equal As Strings    ${response.status_code}    200
    ${json}=   Set Variable  ${response.json()}
    log to console  ${json}



