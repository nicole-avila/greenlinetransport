#!/bin/bash

HOST=$FTP_HOST
USER=$FTP_USERNAME
PASS=$FTP_PASSWORD
REMOTE_DIR=$FTP_REMOTE_DIR
LOCAL_BUILD_DIR="./out"

# Debugging logs
echo "Connecting to FTP server: $HOST"
echo "Uploading from local directory: $LOCAL_BUILD_DIR"
echo "Uploading to remote directory: $REMOTE_DIR"

# Check if local directory exists
if [ -d "$LOCAL_BUILD_DIR" ]; then
  echo "Local build directory exists, listing files:"
  ls -la "$LOCAL_BUILD_DIR"
else
  echo "Local build directory does not exist: $LOCAL_BUILD_DIR"
  exit 1
fi

# Run lftp and output debug info
lftp -u "$USER","$PASS" "$HOST" <<EOF
  set ssl:verify-certificate no
  set ftp:ssl-force true
  set ftp:ssl-protect-data true
  set net:timeout 10
  set net:max-retries 2
  set cmd:verbose true   # Enable verbose output
  mirror -R --verbose "$LOCAL_BUILD_DIR/" "$REMOTE_DIR"
  bye
EOF

# Capture exit code
if [ $? -eq 0 ]; then
  echo "FTP upload successful!"
else
  echo "FTP upload failed!"
  exit 1
fi
