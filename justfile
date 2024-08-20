# print this menu
default:
    just --list

# install dependencies
bootstrap:
    npm install

# format code
fmt:
    npm run format

# lint code
lint:
    npm run lint

# run project
run: bootstrap fmt
    npm run dev