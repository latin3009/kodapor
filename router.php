<?php
$url = $_SERVER["REQUEST_URI"];
if(strpos($url,"/caljac") !== false){
  $root = explode("/",$url);
  $root = $root[1];
  $base = explode("/".$root,__DIR__);
  $base = "/".$root.$base[1];
  header('Location: '.$base."/php/caljac/");;
}
else {
 echo(file_get_contents("index.html"));
}