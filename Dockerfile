FROM node

COPY startup.sh /
RUN mkdir /code; \
	npm install -g bower http=server; \
	chmod +x /startup.sh 
CMD "/startup.sh"

