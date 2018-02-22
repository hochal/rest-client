function send(type, url, data, successCallback, errorCallback) {
    $.ajax({
        type: type,
        url: url,
        contentType: 'application/json',
        data: data,
        success: function (result) {
            successCallback(result);
            // console.debug('result - ', result);
        },
        error: function (result) {
            errorCallback(result);
            // console.debug('result - ', result);
        }
    });
}


let value = {
    httpMethod: {
        get() {
            const dom = document.getElementById("http-method");
            return dom.options[dom.selectedIndex].value;
        },
        set(data) {

        }
    },
    url: {
        get() {
            const dom = document.getElementById("http-url");
            return dom.value;
        },
        set(data) {

        }
    },
    queryString: {
        key: {
            get() {
                const dom = document.getElementById("query-parameter-key");
                return dom.value;
            },
            set(data) {

            }
        },
        value: {
            get() {
                const dom = document.getElementById("query-parameter-value");
                return dom.value;
            },
            set(data) {

            }
        },
        add(key, value) {
            this.list.set(key, value);
            return this.list;
        },
        remove(key) {
            this.list.delete(key);
            return this.list;
        },
        list: new Map()
    },
    request: {
        header: {
            get() {

            },
            set(data) {

            }
        },
        body: {
            get() {
                const dom = document.getElementById("source");
                return dom.value;
            },
            set(data) {

            }
        }
    },
    responds: {
        header: {
            get() {

            },
            set(data) {

            }
        },
        body: {
            get() {

            },
            set(data) {

            }
        }
    }

};

$(document).ready(function () {
    $("#btn-send").click(function () {
        send(value.httpMethod.get(), 'http://175.195.163.17:8080/imp/master/Scale?action=Event', "",
            function (data) {
                console.debug('success result - ', data);
            },
            function (data) {
                console.debug('error result - ', data);
            });

    });
    $("#btn-query-parameter-add").click(function () {
        const divKey = document.createElement('div');
        const divValue = document.createElement('div');
        const divButton = document.createElement('div');
        divKey.classList.add("col-md-5");
        divKey.classList.add("mb-3");
        divKey.innerHTML = '<input class="form-control" type="text" placeholder="Key" readonly>';
        document.getElementById("div-query-parameter").appendChild(divKey);
        divValue.classList.add("col-md-5");
        divValue.classList.add("mb-3");
        divValue.innerHTML = '<input class="form-control" type="text" placeholder="Value" readonly>';
        document.getElementById("div-query-parameter").appendChild(divValue);
        divButton.classList.add("col-md-2");
        divButton.classList.add("mb-3");
        divButton.innerHTML = '<button id="btn-query-parameter-remove" class="btn btn-primary btn-block">Remove</button>';
        document.getElementById("div-query-parameter").appendChild(divButton);
    });

    $("#btn-query-parameter-remove").click(function () {
        // document.getElementById('field').removeChild(obj.parentNode);
        console.debug('remove click');
    });

});

/*
url: url,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                "dto": {
                    "subjectList": [
                        {
                            "userId": user.email,
                            "passwd": Top.Dom.selectById("login-input-password").getText()
                        }
                    ]
                }
            }),
            success: function (data, textStatus, jqXHR) {
                user.setValue("password", "");
                console.log("getUserToken - data", data);
                if (typeof callback === "function") {
                    callback(data.dto);
                }
            },
            error: function (data, textStatus, jqXHR) {
                values.setValue("notification.type", "warning");
                values.setValue("notification.title", "Failure");
                values.setValue("notification.message", "Auth Server Down!");
                Top.Dom.selectById("notification").open();
            }
 */