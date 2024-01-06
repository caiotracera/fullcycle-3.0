FROM golang:alpine AS builder

WORKDIR $GOPATH/src/fullcycle/hello/

COPY . .

RUN go build -o /go/bin/hello


FROM scratch
COPY --from=builder /go/bin/hello /go/bin/hello
ENTRYPOINT ["/go/bin/hello"]