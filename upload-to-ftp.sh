#!/bin/bash

# FTP server credentials
HOST=$FTP_HOST
USER=$FTP_USERNAME
PASS=$FTP_PASSWORD
REMOTE_DIR=$FTP_REMOTE_DIR

# Local build directory (where Next.js builds the static files)
LOCAL_BUILD_DIR="./out"

# Upload files to the FTP server
lftp -u "$USER","$PASS" "$HOST" <<EOF
  set ssl:verify-certificate no
  mirror -R "$LOCAL_BUILD_DIR/" "$REMOTE_DIR"
  bye
EOF
