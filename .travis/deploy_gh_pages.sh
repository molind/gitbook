#!/bin/sh

LAST_COMMIT=$(git rev-parse --short HEAD)
BUILD_DIR=_book
DEPLOY_DIR=.deploy_git

if [ "${REPO_TOKEN}" = "" ]; then echo "No REPO_TOKEN, exit" exit 0
fi

setup_git() {
    git config --global user.email "travis@localhost"
    git config --global user.name "Travis CI"

    git clone https://${REPO_TOKEN}@github.com/gitbook-ng/gitbook-ng.github.io.git $DEPLOY_DIR

    (cd $DEPLOY_DIR; git branch; git branch -a; git checkout master)
}

commit_website_files() {
    REMOTE_VERSION=$(cat $DEPLOY_DIR/version.txt)
    if [ "$REMOTE_VERSION" = "$LAST_COMMIT" ]; then
        echo "No build is required since there is no change"
        exit 0
    fi

    npm run build
    echo $LAST_COMMIT > $BUILD_DIR/version.txt

    rm -fr $DEPLOY_DIR/* $DEPLOY_DIR/.gitignore
    cp -r $BUILD_DIR/* $DEPLOY_DIR/

    cd $DEPLOY_DIR
    git status
    git add .
    git commit --message "Update doc build against ${LAST_COMMIT}"

    git push
}

setup_git
commit_website_files
