/* eslint-disable @typescript-eslint/no-explicit-any */
class RequestProtector {
  data: string;
  reject: any;

  constructor(data: { url: string; params: any }, reject: any) {
    this.data = JSON.stringify(data);
    this.reject = reject;
  }

  protected addUrlLoading = () => {
    const urlRequest = (window as any).urlRequest;

    if (urlRequest) {
      const newArr = [...urlRequest];

      if (!newArr.includes(this.data)) {
        newArr.push(this.data);
      }

      (window as any).urlRequest = newArr;
    } else {
      (window as any).urlRequest = [this.data];
    }
  };

  protected removeUrlLoading = () => {
    const urlRequest = (window as any).urlRequest;
    if (urlRequest) {
      if (urlRequest.includes(this.data)) {
        if (urlRequest.length > 1) {
          (window as any).urlRequest = urlRequest.filter(
            (d: string) => d === this.data
          );
        } else {
          (window as any).urlRequest = undefined;
        }
      }
    }
  };

  protected setter = (status: boolean = false) => {
    if (status) {
      this.addUrlLoading();
    } else {
      this.removeUrlLoading();
    }
  };

  private get loading(): boolean {
    const urlRequest = (window as any).urlRequest;

    if (!urlRequest) return false;

    return urlRequest.includes(this.data);
  }

  handleRequest = (sendRequest: any) => {
    const isClient = !process.env.IS_SERVER_FLAG;

    if (isClient) {
      if (this.loading) {
        this.reject(false);
        return;
      }
      sendRequest(this.setter);
    } else {
      sendRequest();
    }
  };
}

export default RequestProtector;
