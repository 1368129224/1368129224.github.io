#/bin/bash

if [ -d "public" ];
then
	echo 'Delete public folder.'
	rm -rf public
fi
if [ -d "docs" ];
then
	echo 'Delete docs folder.'
	rm -rf docs
fi
hugo -d docs
