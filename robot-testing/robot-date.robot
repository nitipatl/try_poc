*** Settings ***
library  DateTime

*** Testcases ***
Get date
  ${date} =	Get Current Date	local	+ 30 mins
  ${date} =	Convert Date	${date}	result_format=%d.%m.%Y.%H
  Log To Console  ${date}


