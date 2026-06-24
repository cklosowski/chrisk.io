---
title: 'Showing EDD File Download Sizes'
published: 2014-07-18
description: 'The other day I got an interesting support thread for Easy Digital Downloads, asking for the list of files, and their sizes be displayed when viewing a…'
image: '/images/blog/1229138273_a63439c2c9_o.jpg'
tags: ['code', 'Easy Digital Downloads', 'eCommerce', 'Open Source', 'Plugins', 'Software Development', 'WordPress']
category: 'Software Development'
draft: false
---
The other day I got an interesting support thread for Easy Digital Downloads, asking for the list of files, and their sizes be displayed when viewing a product. Being that I only use it to sell WordPress plugins, it seemed pretty minor, but if you were dealing with larger Audio/Video files, or your consumers used their mobile devices frequently, I could see how this would be useful. So I put together a quick, single file, plugin that is [now available in the EDD Library Repo on Github](https://github.com/easydigitaldownloads/library/blob/master/downloads/download-file-sizes.php "View Plugin on Github").

First, here's the primary function that is run:  

function edd\_ck\_show\_file\_sizes( $post\_id ) {
	$files = edd\_get\_download\_files( $post\_id, null );
	$decimals = 2;
	$sz = 'BKMGTP';
	$header = \_n( 'File Size', 'File Sizes', count( $files ), 'edd' );
	echo '<h5>' . $header . '</h5>';
	echo '<ul>';
	foreach( $files as $file ) {
		$bytes = filesize( get\_attached\_file( $file\['attachment\_id'\] ) );
		$factor = floor((strlen($bytes) - 1) / 3);
		echo '<li>' . $file\['name'\] . ' - ' . sprintf( "%.{$decimals}f", $bytes / pow( 1024, $factor) ) . @$sz\[$factor\] . '</li>';
	}
	echo '</ul>';
}
add\_action( 'edd\_after\_download\_content', 'edd\_ck\_show\_file\_sizes', 10, 1 );

Now, a quick overview. Basically what we're doing is looking for all the uploaded media items attached as 'Downloads' to this product. Once we get them, we're iterating through them. You see this in the line

$files = edd\_get\_download\_files( $post\_id, null );

After that we do some setup, only wanting 2 decimal places, setting up the title of the list (following the numeric localization method), and you'll notice that odd variable `BKMGTP`. What is this? Well it's used to make the output of the size calculation human readable. It's for "Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, and Petabytes". I've never seen a use case of someone selling Tera/Petabyte files on EDD, but who am I to judge.

After that, a little loop to run each calculation by powers of 1024, and we're good to go!

You can go [grab the full plugin-ready file here](https://raw.githubusercontent.com/easydigitaldownloads/library/master/downloads/download-file-sizes.php).

[Image](https://www.flickr.com/photos/trainor/1229138273/in/photolist-2SBDZc-4prL9g-6jdsvY-6jBtmv-gnarGS-5wX2Bs-qyMKq-aJE3c4-5Vijca-dkDirG-6je3r7-6cAVab-ftF9z-8BAcDm-gmZkLc-ao2o2q-4vKZr7-4crN2W-5Sp3Qg-bZhC4N-i9VVxB-7AiCZ7-cmbQkm-cktRVf-cmc2QJ-cmegkj-cmaGvb-cmd85N-cktFgy-cktQSL-cma5Z1-cktY7A-cmc7fY-cktJff-cmav11-cktCed-cmaP5f-cmehjf-cmdsNd-cmeio5-cktu9q-cmcNaj-cmcMrL-cmbwNJ-cmbrFo-cmdbcC-cmbxSu-cmaHTw--cktyDh) credit(CC): [John Trainor](https://www.flickr.com/photos/trainor/)
