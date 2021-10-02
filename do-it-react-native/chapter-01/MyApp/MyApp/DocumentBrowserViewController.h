//
//  DocumentBrowserViewController.h
//  MyApp
//
//  Created by hive on 2021/10/02.
//

#import <UIKit/UIKit.h>

@interface DocumentBrowserViewController : UIDocumentBrowserViewController

- (void)presentDocumentAtURL:(NSURL *)documentURL;

@end
