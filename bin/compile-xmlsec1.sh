#!/bin/bash

# Check to see if the file already exists
if [ ! -f ./bin/xmlsec1 ]
then
    # Install prereq's
    apt update;
    apt install -y autoconf libtool libtool-bin libxml2-dev libxslt-dev libssl-dev;

    # Pull down the latest source
    git clone https://github.com/lsh123/xmlsec.git;
    cd ./xmlsec;

    # Create the configuration and make files
    if [ "$GOOS" = "windows" ]; then
        ./autogen.sh \
            --build="x86_64-w64-mingw32" \
            --host="x86_64-w64-mingw32" \
            --enable-mscrypto \
            --enable-static="yes" \
            --enable-shared="no" \
            --enable-static-linking="yes";
    else
        ./autogen.sh \
            --enable-static="yes" \
            --enable-shared="no" \
            --enable-static-linking="yes";
    fi

    make clean;
    make;

    # Move the binary to where we need it
    mkdir -p ../bin;
    cp ./apps/xmlsec1 ../bin;

    # Perform some clean up and setting permissions
    cd ..;
    rm -rf ./xmlsec;
    chmod -R +755 ./bin;
    chown -R 1000:users ./bin;
fi