for ($attribs = 1; $attribs -lt 10; $attribs++) {
  for ($levels = 1; $levels -lt 5; $levels++) {
   node .\scripter.js 1 0 2 $levels $attribs
  }
}
