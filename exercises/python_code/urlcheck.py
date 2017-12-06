import urllib.request
import urllib.error
import requests

#request = urllib.request.Request('http://kishor.ebalbharati.in/Archive/include/pdf/1972_01.pdf')
url = 'http://kishor.ebalbharati.in/Archive/include/pdf/1972_01.pdf'

try:
    #response = urllib.request.urlopen(request)
    r = requests.get(url, stream=True)
    with open('/tmp/kishore72_01.pdf', 'wb') as fd:
#        fd.write(r.content);
        for chunk in r.iter_content(chunk_size=9048):
            fd.write(chunk)
            fd.close();
            break;
    # print (request.full_url, ' exists')
    # do stuff..
except urllib.error.HTTPError: # 404, 500, etc..
    pass


