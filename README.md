# pro-systems

commit 6a43454ac2551e6afa83296f45d26bef40045bcb "Modify gulpfile" :
  Из основной задачи был убран task images, чтобы не перегружать память когда работа идет только с кодом.
  При появлении новых изображений, которые нужно перенести в /dist, необходимо вызывать команду gulp images.