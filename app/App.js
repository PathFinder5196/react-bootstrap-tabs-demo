import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs, Tab} from 'react-bootstrap-tabs';

ReactDOM.render((
    <div className="container">
        <div className="row">
            <section>
                <h5>Style tag not hidding Tab</h5>
                <Tabs>
                    <Tab label="Container style" style="display:none">Tabs container has a green border<br/><br/>
                                                  <pre>&lt;Tabs className="..."&gt;</pre>
                    </Tab>
                    <Tab label="Header style">All the tab headers have a bold font, the active tab header has a blue font<br/><br/>
                        <pre>.tab-header-bold {"{"}<br/>
                            &nbsp;&nbsp;font-weight: bold;<br/>
                        {"}"}<br/>
                        .nav-tabs a.tab-header-blue.active {"{"}<br/>
                            &nbsp;&nbsp;color: blue;<br/>
                        {"}"}<br/><br/>
                        &lt;Tabs headerClass="tab-header-bold" activeHeaderClass="tab-header-blue"&gt;</pre>
                    </Tab>
                    <Tab label="Tab Style" className="tab-content-green">The tab contents have a yellow background and this one specifically has green aligned text<br/><br/>
                        <pre>&lt;Tabs contentClass="..."&gt;<br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&lt;Tab className="..." /&gt;<br/>
                            &lt;/Tabs&gt;</pre>
                    </Tab>                 
                </Tabs>
            </section>
        </div>
    </div>
), document.getElementById('app'));
