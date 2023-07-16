#!/bin/sh

python3 manage.py migrate
python3 manage.py collectstatic
npm run build
uwsgi --http :8000 --wsgi-file /opt/template/core/wsgi.py
