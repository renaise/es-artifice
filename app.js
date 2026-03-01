(function () {
  var ARTIFACTS = [
    {"id":"6975703","code":"A1","type":"object","title":"Prism of Latent Color","entity":"Both","mode":"WHITEBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI2OTc1NzAzL29yaWdpbmFsX2FiMDhiNzZjYTNkMDBjYTRkNWYxMmE2OTdlYmRlODQ4LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=0"},
    {"id":"8975932","code":"A2","type":"digital","title":"The Graduates (Render)","entity":"Artifice NYC","mode":"BLACKBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI4OTc1OTMyL29yaWdpbmFsX2E5NDY4NDAwYjU2Mjk4M2NjOTdiY2FiMmQxMzY5YmM5LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=0"},
    {"id":"6779720","code":"A3","type":"spatial","title":"Solitary Enclosure","entity":"Artifice NYC","mode":"BLACKBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI2Nzc5NzIwL29yaWdpbmFsXzIxOTFkNmMzOTRmZjEyMTc2OGRjY2VhYzI4NjlkYjI3LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=0"},
    {"id":"9916426","code":"A4","type":"object","title":"Specimen (Unclassified)","entity":"Both","mode":"WHITEBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI5OTE2NDI2L29yaWdpbmFsXzc3MGE2MzMxMzE5MzI0NTY1MjgzNDMxYTE4ZTJjMDFkLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=0"},
    {"id":"4285564","code":"A5","type":"digital","title":"Magma State","entity":"Studio Artifice","mode":"Both","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI0Mjg1NTY0L29yaWdpbmFsXzBkZjQyNjM2NDMzNDQ4YzQ3NTJlMWRjNTQzNjRiNjlmLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=1"},
    {"id":"3399350","code":"A6","type":"environmental","title":"Terminal Beach","entity":"Artifice NYC","mode":"BLACKBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIzMzk5MzUwL29yaWdpbmFsXzQzMDUyYzhjNGMyMjdiNjgxZDFmMTg1OGJlMDQzZWZkLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=1"},
    {"id":"1628686","code":"A7","type":"object","title":"Biomechanical Lattice","entity":"Both","mode":"Both","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxNjI4Njg2L29yaWdpbmFsX2RhZGExMjM3ZTEzODk2YmM0ZmRkMTAwY2E0NTIwODkwLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=1"},
    {"id":"4300550","code":"A8","type":"digital","title":"Crystalline Render","entity":"Studio Artifice","mode":"WHITEBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI0MzAwNTUwL29yaWdpbmFsXzgxYTc5NDBkM2I5ODM4MmIzZDdkZTA2Y2FhNmUxODg5LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=1"},
    {"id":"147022","code":"A9","type":"object","title":"Peitho Stone","entity":"Artifice NYC","mode":"WHITEBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxNDcwMjIvb3JpZ2luYWxfNDFjOWU2NDVkMDljYzljYmY0YjRmYzRlODhiNzQ1MDguanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0NDAsImhlaWdodCI6NDQwLCJmaXQiOiJjb3ZlciIsIndpdGhvdXRFbmxhcmdlbWVudCI6ZmFsc2V9LCJ3ZWJwIjp7InF1YWxpdHkiOjc1fSwianBlZyI6eyJxdWFsaXR5Ijo3NX0sInJvdGF0ZSI6bnVsbH19?bc=1"},
    {"id":"4585654","code":"A10","type":"digital","title":"Organic Topology (Render)","entity":"Both","mode":"Both","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI0NTg1NjU0L29yaWdpbmFsXzA0N2RmMWNiYzc4NGU1Y2RhMjJkNTdlMmIwY2QzYTgyLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=1"},
    {"id":"1892722","code":"A11","type":"object","title":"Wearable Extrusion","entity":"Studio Artifice","mode":"BLACKBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxODkyNzIyL29yaWdpbmFsXzExY2I1Yjc1MTZmNGU0NTA0ODhkNDNjZTViN2RjZTlmIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0NDAsImhlaWdodCI6NDQwLCJmaXQiOiJjb3ZlciIsIndpdGhvdXRFbmxhcmdlbWVudCI6ZmFsc2V9LCJ3ZWJwIjp7InF1YWxpdHkiOjc1fSwianBlZyI6eyJxdWFsaXR5Ijo3NX0sInJvdGF0ZSI6bnVsbH19?bc=1"},
    {"id":"4585790","code":"A12","type":"object","title":"Carved Residue","entity":"Artifice NYC","mode":"WHITEBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI0NTg1NzkwL29yaWdpbmFsXzZlYWNlMmVhOTBhMDVkNjc2NTVkNmRmMGI0MzAzZjg2LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=1"},
    {"id":"6659697","code":"A13","type":"object","title":"Material Speculation: Gorgon","entity":"Both","mode":"Both","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI2NjU5Njk3L29yaWdpbmFsX2IxYzgzMjIzODYyM2VkZWNmN2YyNzg1ZjU4YjcwNmMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=0"},
    {"id":"4182232","code":"A14","type":"digital","title":"Unknown Form (Scan)","entity":"Studio Artifice","mode":"WHITEBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI0MTgyMjMyL29yaWdpbmFsXzliYmE5YTY4MWMyNTI2NTI3ZmYyMzEyMTY5MWRkOWRjLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=1"},
    {"id":"2256933","code":"A15","type":"object","title":"Mineral Accretion","entity":"Artifice NYC","mode":"WHITEBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIyMjU2OTMzL29yaWdpbmFsX2UzZDcwNWU4MWMwOGM0NGM2NzY5NDY3N2FkOTMzOTU1LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=1"},
    {"id":"5404771","code":"A16","type":"environmental","title":"Redshift Installation","entity":"Both","mode":"BLACKBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI1NDA0NzcxL29yaWdpbmFsXzU2ZDU3ZmNhYTA3OWI5M2ZiMDY3NTE0MDAxNWMyYmI0LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=0"},
    {"id":"3200746","code":"A17","type":"object","title":"Capsule Array","entity":"Studio Artifice","mode":"WHITEBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIzMjAwNzQ2L29yaWdpbmFsXzIxMDgxNmRkNjEzMmQxZDE2MjViZTM4MmVlMTc0MzNiLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=1"},
    {"id":"4727018","code":"A18","type":"spatial","title":"Universum Model","entity":"Artifice NYC","mode":"Both","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI0NzI3MDE4L29yaWdpbmFsXzFlM2RmNjBkMmRlZWY3ODFjYmNlMDY3NmRhZTUxMTFhLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=1"},
    {"id":"1031926","code":"A19","type":"digital","title":"Machine Skin Texture","entity":"Both","mode":"WHITEBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxMDMxOTI2L29yaWdpbmFsX2RjOGZmN2VhMjRiNDUxYWRmNmQyYTg4MzdmYTg2MzNlLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=1"},
    {"id":"18009900","code":"A20","type":"object","title":"Vessel of Collapsed Memory","entity":"Artifice NYC","mode":"BLACKBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxODAwOTkwMC9vcmlnaW5hbF80ZjYyNGQxNDk1ZTk5ODI1NTNjNWJjNzcxZmY4ODYzZS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0"},
    {"id":"18009901","code":"A21","type":"object","title":"Threshold Membrane","entity":"Artifice NYC","mode":"BLACKBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxODAwOTkwMS9vcmlnaW5hbF9kYTZkNjZhMDgwOGY4YzZkZDU0MGRkMjZjYzQwNDM1MS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0"},
    {"id":"18009902","code":"A22","type":"object","title":"Calcified Protocol","entity":"Both","mode":"WHITEBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxODAwOTkwMi9vcmlnaW5hbF9hM2E4NDYwOGQxZmNmYmFkYjljY2ZlMzk0OTY1Y2QwNC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0"},
    {"id":"18009911","code":"A23","type":"object","title":"Ritual Substrate","entity":"Studio Artifice","mode":"Both","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxODAwOTkxMS9vcmlnaW5hbF9kMDI2Yjg1YjViMTgyODRhNzA2OWM0YjUxZTgzNGViOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0"},
    {"id":"18009920","code":"A24","type":"object","title":"Exoskeletal Proof","entity":"Artifice NYC","mode":"BLACKBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxODAwOTkyMC9vcmlnaW5hbF8wMjY5YWYwMTJlZWQxMTYxNWQ1ZGY5MDk5ZTBlZjY2NS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0"},
    {"id":"18009916","code":"A25","type":"spatial","title":"Chamber of Soft Architecture","entity":"Both","mode":"BLACKBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxODAwOTkxNi9vcmlnaW5hbF81M2I0NGVjMGVlMjFlZWZmNjdkZTNiNGUzYjg4ODdlMC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0"},
    {"id":"18009907","code":"A26","type":"object","title":"Dermal Cartography","entity":"Artifice NYC","mode":"WHITEBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxODAwOTkwNy9vcmlnaW5hbF8xZDgzMzQ5MGNmYmExMzBjMmJhNTM2YWE2ODMwYTA2ZC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0"},
    {"id":"18009917","code":"A27","type":"spatial","title":"Negative Space Enclosure","entity":"Both","mode":"BLACKBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxODAwOTkxNy9vcmlnaW5hbF85N2I2NzJlYmM5MGU5YWM4NjRjZTc3MDkxOTAwODkwMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0"},
    {"id":"18009915","code":"A28","type":"object","title":"Folded Topology","entity":"Studio Artifice","mode":"WHITEBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxODAwOTkxNS9vcmlnaW5hbF9kZWFmMjg2N2NjYTQwYTM4ZjliY2UwOWE1NzVmOWI1Yy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0"},
    {"id":"18009908","code":"A29","type":"object","title":"Organ Without Body","entity":"Artifice NYC","mode":"Both","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxODAwOTkwOC9vcmlnaW5hbF8zMzMxM2IxNjIyNDk0ZTEyM2ExNTc2M2IzMWM3NjZlMC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0"},
    {"id":"3140412","code":"A30","type":"digital","title":"Simulation Cartridge","entity":"Artifice NYC","mode":"BLACKBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIzMTQwNDEyL29yaWdpbmFsX2U1NWFmYmM5MzVkZjJmYTIwNTkzMjY2ZjFlZDE0MDlkLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=1"},
    {"id":"43045672","code":"A31","type":"object","title":"Bioport Relay","entity":"Both","mode":"WHITEBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI0MzA0NTY3Mi9vcmlnaW5hbF9kMDAxYWM5MmFhMDQxYzA2MzM2YWVmMjE0ODY2ZTgwYS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0"},
    {"id":"43045675","code":"A32","type":"object","title":"Scalpel for Dense Matter","entity":"Studio Artifice","mode":"WHITEBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI0MzA0NTY3NS9vcmlnaW5hbF9iNmFiOTA5OWM2ZDA0YWY2NDJjYjIyYjhhNzhkNTRlNC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0"},
    {"id":"43045676","code":"A33","type":"spatial","title":"Telepod Chamber","entity":"Artifice NYC","mode":"BLACKBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI0MzA0NTY3Ni9vcmlnaW5hbF80ODEwMTBhMDVjMmMyMmRhYjVkMWIxNzI2ZmJlOTZkNi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0"},
    {"id":"43045680","code":"A34","type":"object","title":"Gynecological Instrument for Mutant Women","entity":"Both","mode":"Both","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI0MzA0NTY4MC9vcmlnaW5hbF9mYjkzOGQ2MDhmMjZhZTVlYTYxMmQ3YWEwMDNkYmUxZi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0"},
    {"id":"43045686","code":"A35","type":"object","title":"Second Scalpel (Variant)","entity":"Studio Artifice","mode":"WHITEBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI0MzA0NTY4Ni9vcmlnaW5hbF85M2RlNjMxNTcxMTU2Mjk3MTBlOThiMzI2ZTk2ZTBiMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0"},
    {"id":"18009910","code":"A36","type":"object","title":"Nerve Cluster Assembly","entity":"Artifice NYC","mode":"BLACKBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxODAwOTkxMC9vcmlnaW5hbF81N2Y3NWUxNjllNWZkMjI5ODljMDhjMjg1MjE3ODI4Zi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0"},
    {"id":"18009913","code":"A37","type":"object","title":"Spore Print (Archival)","entity":"Both","mode":"WHITEBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxODAwOTkxMy9vcmlnaW5hbF82NjljZmVhMDBiZTU2OGE5OWI1MGUzN2NmNTE5MWY5Zi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0"},
    {"id":"18009912","code":"A38","type":"object","title":"Visceral Proxy","entity":"Artifice NYC","mode":"Both","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxODAwOTkxMi9vcmlnaW5hbF83MGE4MDlkZTBjYTljMWRiYTI5NDc2MzY5NTQ0Y2UxMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0"},
    {"id":"18009919","code":"A39","type":"object","title":"Gland Topology","entity":"Studio Artifice","mode":"BLACKBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxODAwOTkxOS9vcmlnaW5hbF9hNjMxYmJiYmFlODAzMjMzODFhYmY5ZDJiOWU2MjY0Yy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0"},
    {"id":"43045673","code":"A40","type":"object","title":"Game Pod (Organic Console)","entity":"Both","mode":"Both","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI0MzA0NTY3My9vcmlnaW5hbF82ZGVjOGQzNmRlMWIwNDIwYzJmODliMTFmMzBhZGVhMy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0"},
    {"id":"43045674","code":"A41","type":"object","title":"Umbilical Interface","entity":"Artifice NYC","mode":"BLACKBOX","source":"Are.na","thumb":"https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI0MzA0NTY3NC9vcmlnaW5hbF8wNjAxZTY5ODA5MmE4YjY1NzIwZDM5MTI5MDBmOTdlYy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0"}
  ];

  var typeLabels = {
    object: 'Object', spatial: 'Spatial', digital: 'Digital',
    performance: 'Performance', protocol: 'Protocol',
    interface: 'Interface', documentation: 'Documentation',
    environmental: 'Environmental',
  };

  var currentQuery = '';
  var $grid = document.getElementById('artifact-grid');
  var $count = document.getElementById('grid-count');
  var $empty = document.getElementById('empty-state');
  var $search = document.getElementById('search-input');

  function esc(s) {
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function modeClass(mode) {
    if (mode === 'WHITEBOX') return 'tag--wb';
    if (mode === 'BLACKBOX') return 'tag--bb';
    return 'tag--both';
  }

  function modeIcons(mode) {
    if (mode === 'WHITEBOX') return '<img src="wb-icon.png" class="mode-icon" alt="WHITEBOX">';
    if (mode === 'BLACKBOX') return '<img src="bb-icon.png" class="mode-icon" alt="BLACKBOX">';
    return '<img src="wb-icon.png" class="mode-icon" alt="WHITEBOX"> <img src="bb-icon.png" class="mode-icon" alt="BLACKBOX">';
  }

  function getFiltered() {
    if (!currentQuery.trim()) return ARTIFACTS;
    var q = currentQuery.toLowerCase();
    return ARTIFACTS.filter(function (a) {
      return [a.title, a.type, a.mode, a.entity].join(' ').toLowerCase().indexOf(q) !== -1;
    });
  }

  function render() {
    var list = getFiltered();
    var total = list.length;
    $grid.innerHTML = '';
    $count.textContent = total + ' artifact' + (total !== 1 ? 's' : '');
    $empty.hidden = total > 0;

    list.forEach(function (a) {
      var li = document.createElement('li');
      li.className = 'card';
      var typeLabel = typeLabels[a.type] || a.type;
      li.innerHTML =
        '<div class="card-link">' +
          '<div class="card-img-wrap">' +
            '<img class="card-img" src="' + esc(a.thumb) + '" alt="' + esc(a.title) + '" loading="lazy">' +
            '<div class="card-overlay">' +
              '<span class="card-overlay-line">' + esc(typeLabel) + '</span>' +
              '<span class="card-overlay-mode card-overlay-mode--' + (a.mode === 'WHITEBOX' ? 'wb' : a.mode === 'BLACKBOX' ? 'bb' : 'both') + '">' + modeIcons(a.mode) + '</span>' +
              '<span class="card-overlay-line">' + esc(a.entity) + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="card-body">' +
            '<span class="card-code">' + esc(a.code) + '</span>' +
            '<div class="card-title">' + esc(a.title) + '</div>' +
            '<div class="card-meta">' + esc(typeLabel) + ' ' + modeIcons(a.mode) + '</div>' +
          '</div>' +
        '</div>';
      $grid.appendChild(li);
    });
  }

  $search.addEventListener('input', function () {
    currentQuery = $search.value;
    render();
  });

  // Tab switching
  document.querySelectorAll('.header-tab').forEach(function (tab) {
    tab.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelectorAll('.header-tab').forEach(function (t) {
        t.classList.remove('header-tab--active');
      });
      tab.classList.add('header-tab--active');
    });
  });

  render();
})();
